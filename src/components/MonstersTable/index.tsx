'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TrashIcon } from "lucide-react"
import { Checkbox } from "../ui/checkbox"
import { memo } from "react"

interface MonstersTableProps {
  monsters: Monster[];
  headers: string[];
  handleRemoveMonster: (id: string) => void;
  selectedMonsters: Monster[];
  handleSelectMonster: (id: string) => void;
}

const MonstersTableComponent: React.FC<MonstersTableProps> = ({
  monsters,
  headers,
  handleRemoveMonster,
  selectedMonsters,
  handleSelectMonster,
}) => {
  const isMonsterSelected = (monsterId: string) => 
    selectedMonsters.some(monster => monster.id === monsterId);

  const isSelectionDisabled = (monsterId: string) => 
    selectedMonsters.length === 2 && !isMonsterSelected(monsterId);

  return (
    <Table>
      <TableCaption>A lista de monstros disponíveis</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          {headers.map((header) => (
            <TableHead key={header}>{header.toLocaleUpperCase()}</TableHead>
          ))}
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {monsters.map((monster) => (
          <MonsterRow 
            key={monster.id}
            monster={monster}
            headers={headers}
            onRemove={handleRemoveMonster}
            onSelect={handleSelectMonster}
            isSelected={isMonsterSelected(monster.id)}
            isSelectionDisabled={isSelectionDisabled(monster.id)}
          />
        ))}
      </TableBody>
    </Table>
  )
}

const MonsterRow = memo<{
  monster: Monster;
  headers: string[];
  onRemove: (id: string) => void;
  onSelect: (id: string) => void;
  isSelected: boolean;
  isSelectionDisabled: boolean;
}>(({
  monster, 
  headers, 
  onRemove, 
  onSelect, 
  isSelected,
  isSelectionDisabled
}) => (
  <TableRow>
    <TableCell>
      <Checkbox 
        checked={isSelected}
        onClick={() => onSelect(monster.id)}
        disabled={isSelectionDisabled}
      />
    </TableCell>
    {headers.map((header) => (
      <TableCell key={header}>
        {monster[header as keyof Monster]}
      </TableCell>
    ))}
    <TableCell className="cursor-pointer">
      <TrashIcon onClick={() => onRemove(monster.id)} />
    </TableCell>
  </TableRow>
));

export const MonstersTable = memo(MonstersTableComponent);
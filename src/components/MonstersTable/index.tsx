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

export function MonstersTable({
    monsters,
    headers,
    handleRemoveMonster,
    selectedMonsters,
    handleSelectMonster,
} : {
    monsters: Monster[],
    headers: string[],
    handleRemoveMonster: (id: string) => void,
    selectedMonsters: Monster[],
    handleSelectMonster: (id: string) => void
}){
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
                    <TableRow key={monster.name}>
                        <TableCell>
                            <Checkbox 
                                onClick={()=> {
                                    handleSelectMonster(monster.id);                 
                                }} 
                                disabled={selectedMonsters.length === 2 
                                && !selectedMonsters.find((selectedMonster) => selectedMonster.id === monster.id)}

                                checked={selectedMonsters.find((selectedMonster) => selectedMonster.id === monster.id) !== undefined}
                            />
                        </TableCell>
                        {headers.map((header) => (
                            <TableCell key={header}>{monster[header as keyof Monster]}</TableCell>
                        ))}
                        <TableCell className="cursor-pointer"><TrashIcon onClick={()=> handleRemoveMonster(monster.id)}/></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
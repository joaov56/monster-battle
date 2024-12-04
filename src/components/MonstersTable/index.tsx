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

export function MonstersTable({
    monsters,
    headers,
    handleRemoveMonster
} : {
    monsters: Monster[],
    headers: string[],
    handleRemoveMonster: (id: string) => void
}){
    return (
        <Table>
            <TableCaption>A lista de monstros disponíveis</TableCaption>
            <TableHeader>
                <TableRow>
                    {headers.map((header) => (
                        <TableHead key={header}>{header.toLocaleUpperCase()}</TableHead>
                    ))}
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {monsters.map((monster) => (
                    <TableRow key={monster.name}>
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
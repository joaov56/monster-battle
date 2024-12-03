import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export function MonstersTable({
    monsters,
    headers
} : {
    monsters: Monster[],
    headers: string[]
}){
    return (
        <Table>
            <TableCaption>A lista de monstros disponíveis</TableCaption>
            <TableHeader>
                <TableRow>
                    {headers.map((header) => (
                        <TableHead key={header}>{header.toLocaleUpperCase()}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {monsters.map((monster) => (
                    <TableRow key={monster.name}>
                        {headers.map((header) => (
                            <TableCell key={header}>{monster[header as keyof Monster]}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
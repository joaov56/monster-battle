import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"

export function InfoTooltip(){
    return (
        <TooltipProvider >
            <Tooltip>
                <TooltipTrigger><Info className="mr-4"/></TooltipTrigger>
                <TooltipContent>
                    <p>Para iniciar uma batalha selecione dois monstros na tabela abaixo</p>
                </TooltipContent>
            </Tooltip>
      </TooltipProvider>
    )
}
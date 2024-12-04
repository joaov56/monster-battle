import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

export function BattleLogsModal({open, onClose, winner, logs} : {
    open: boolean,
    onClose: () => void,
    winner: string,
    logs: string[]}){

    return(
        <Dialog open={open} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{winner} venceu a batalha</DialogTitle>
          </DialogHeader>

          {logs.map((log, index) => (
            <p key={index}>{log} {index === logs.length - 1 && 'venceu a batalha'}</p>
          ))}
          
        </DialogContent>
      </Dialog>
    )
}
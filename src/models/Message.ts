export class Message{
    _id: string;
    subject: string;
    files?: File[];
    fromName: string;
    fromId?: string;
    toId?: string;
    toName: string;
    isRead?: boolean;
    createdAt: Date;
    updatedAt: Date;
}
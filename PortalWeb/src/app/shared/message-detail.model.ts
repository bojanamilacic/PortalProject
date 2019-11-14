import { CommentDetail } from './comment-detail.model';

export class MessageDetail {

  public MessageId: number;
  public TextMessage: string;
  public CurrentDate: Date;
  public ListOfComments: CommentDetail[];
  public Email: string;
  public IsApproved: boolean;
  public Group: string;
  public IsDeleted: boolean;
}


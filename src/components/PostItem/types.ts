import { IPost } from '../../types/post';

export interface PostItemProps extends Omit<IPost, 'content'> {
  isMarked?: boolean;
}

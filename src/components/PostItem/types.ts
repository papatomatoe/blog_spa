import { IPost } from '../../types/post';

export interface PostItemProps extends Omit<IPost, 'id' | 'content'> {
  isMarked?: boolean;
}

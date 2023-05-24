export type Author = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
};

export type Tag = {
  name: string;
  color: string;
};

export type Article = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  avatarUrl: string | null;
  tags: Tag[];
  author: Author;
};

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Album {
  id: number;
  userId: number;
  title: string;
}

export interface Photo {
  id: number;
  albumId: number;
  title: string;
  thumbnailUrl: string;
}

export interface AuthUser {
  uid: string;
  name: string | null;
  email: string | null;
}

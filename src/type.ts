import { ReactNode } from 'react';

type User = {
  id: string;
  photo: string;
  name: string;
  position: string;
  email: string;
  phone: string;
};

type SectionProps = {
  title: string;
  children: ReactNode;
};

type GetRequestProps = {
  usersList: User[];
  isLoading: boolean;
  nextPage: string;
  setUsersList: (users: User[]) => void;
  setNextPage: (url: string) => void;
};

type SuccessContentProps = {
  isSuccess: boolean;
};

type PostRequestProps = {
  fetchFirstPage: () => void;
};

type FormUserProps = {
  fetchFirstPage: () => void;
  setIsShow: (show: boolean) => void;
  setIsSuccess: (success: boolean) => void;
};

export type {
  GetRequestProps,
  SectionProps,
  User,
  SuccessContentProps,
  PostRequestProps,
  FormUserProps,
};

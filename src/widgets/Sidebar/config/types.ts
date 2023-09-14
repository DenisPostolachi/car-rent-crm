import { JSX } from 'react';

type Page = {
  title: string;
  icon: JSX.Element;
}

export type Pages = {
  MainBlock: Page[],
  Report: Page[],
};

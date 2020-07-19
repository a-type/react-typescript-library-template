import * as React from 'react';

export type ComponentProps = {
  children?: React.ReactNode;
};

export function Component({ children }: ComponentProps) {
  return <div>{children || 'Hello world'}</div>;
}

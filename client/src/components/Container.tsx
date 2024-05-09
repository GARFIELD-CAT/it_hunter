import clsx from 'clsx';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main className={clsx('px-4 m-auto max-w-[78rem]', className)}>
      {children}
    </main>
  );
};

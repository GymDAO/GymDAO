import { cn } from '@/styles/utils';
import { HTMLAttributes } from 'react';

type LayoutProps = {
  maxWidth?: boolean;
  padding?: boolean;
  fullWidth?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/**
 * A responsive layout component that allows flexible configuration of section width and padding.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the section.
 * @param {string} [className] - Additional class names to be merged with the default layout classes.
 * @param {boolean} [maxWidth=true] - Controls whether the section should have a maximum width of the screen.
 * @param {boolean} [padding=true] - Controls whether the section should have padding on the left and right sides.
 * @param {boolean} [fullWidth=false] - Option to allow the section to take the full screen width.
 * @param {HTMLAttributes<HTMLDivElement>} props - Additional HTML attributes to be passed to the section element.
 *
 * @returns {JSX.Element} The rendered section element with the applied layout styles.
 *
 * @example
 * ```tsx
 * <Layout padding={false} maxWidth={false} fullWidth className="custom-class">
 *   <div>Your content goes here</div>
 * </Layout>
 * ```
 */
export const Layout = ({
  children,
  className,
  maxWidth = true,
  padding = true,
  fullWidth = false,
  ...props
}: LayoutProps) => {
  const layoutClasses = cn(
    maxWidth && 'max-w-screen',
    padding && 'section-padding',
    fullWidth && 'w-full',
    className
  );

  return (
    <section className={layoutClasses} {...props}>
      {children}
    </section>
  );
};

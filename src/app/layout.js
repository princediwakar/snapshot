import '../styles.css';

export const metadata = {
  title: 'Snapshot',
  description: 'Image gallery app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

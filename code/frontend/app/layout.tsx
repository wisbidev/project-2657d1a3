import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Web Agent Team',
  description: 'Đội ngũ chuyên gia xây dựng web – từ landing page đến ứng dụng phức tạp.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

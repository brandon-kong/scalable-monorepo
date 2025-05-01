import { UnprotectedRoute } from "@core/auth/react/next";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <UnprotectedRoute redirect>{children}</UnprotectedRoute>;
}

export default function ExternalLinkItem({ url, icon, title }: { url: string, icon: JSX.Element, title: string }) {
    return (
        <a target="_blank" title={title} href={url}>{icon}</a>
    );
}
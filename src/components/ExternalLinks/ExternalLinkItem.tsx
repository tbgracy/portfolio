export default function ExternalLinkItem({ url, icon }: { url: string, icon: JSX.Element }) {
    return (
        <a target="_blank" href={url}>{icon}</a>
    );
}
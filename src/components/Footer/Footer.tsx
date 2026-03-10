declare const __COMMIT_HASH__: string;

export const Footer = () => (
  <footer>
    <span style={{ opacity: 0.4, fontSize: 11 }}>{__COMMIT_HASH__}</span>
  </footer>
);

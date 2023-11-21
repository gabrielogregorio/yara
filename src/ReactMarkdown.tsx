import { ReactElement, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface IPartialChildrenType {
  children: ReactNode;
}

const StrongTag = ({ children }: Partial<IPartialChildrenType>): ReactElement => <strong>{children}</strong>;

const ATag = ({ href, children }: Partial<{ children: ReactNode; href: string | undefined }>): ReactElement => (
  <a target="_blank" rel="noreferrer" href={href} className="text-white underline">
    {children}
  </a>
);

const PTag = ({ children }: Partial<IPartialChildrenType>): ReactElement => <p>{children}</p>;

const LiTag = ({ children }: Partial<IPartialChildrenType>): ReactElement => <li>{children}</li>;

const OlTag = ({ children }: Partial<IPartialChildrenType>): ReactElement => <ol>{children}</ol>;

const UlTag = ({ children }: Partial<IPartialChildrenType>): ReactElement => (
  <ul className="list-disc ml-5 mt-[0.5rem]">{children}</ul>
);

const TableTag = ({ children }: Partial<IPartialChildrenType>): ReactElement => <table>{children}</table>;

const ThTag = ({ children }: Partial<IPartialChildrenType>): ReactElement => <th>{children}</th>;

const TrTag = ({ children }: Partial<IPartialChildrenType>): ReactElement => <tr>{children}</tr>;

const TdTag = ({ children }: Partial<IPartialChildrenType>): ReactElement => <td>{children}</td>;

export const MarkdownToHtml = ({ body }: { body: string }): ReactElement => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      strong: StrongTag,
      a: ATag,
      p: PTag,
      li: LiTag,
      ol: OlTag,
      ul: UlTag,
      table: TableTag,
      th: ThTag,
      tr: TrTag,
      td: TdTag,
    }}>
    {body}
  </ReactMarkdown>
);

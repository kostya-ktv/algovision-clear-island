import { memo, useMemo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  gruvboxLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface ICodeFragment {
  code: string;
  style: "code" | "legend";
}
const CodeFragment: React.FC<ICodeFragment> = ({ code, style }) => {
  const syntaxStyle = useMemo(() => {
    if (style === "code") return oneDark;
    if (style === "legend") return gruvboxLight;
  }, [style]);
  return (
    <SyntaxHighlighter
      customStyle={{ height: "100%", fontSize: "14px" }}
      language="javascript"
      style={syntaxStyle}
    >
      {code}
    </SyntaxHighlighter>
  );
};
export default memo(CodeFragment);

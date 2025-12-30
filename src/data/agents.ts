import type { Agent } from "@/types/agents";
import formIcon from "@/assets/agent_vectors/form.svg";
import textCursorIcon from "@/assets/agent_vectors/text_cursor.svg";
import warningIcon from "@/assets/agent_vectors/warning.svg";
import documentIcon from "@/assets/agent_vectors/document.svg";
import crateIcon from "@/assets/agent_vectors/crate.svg";
import salesIcon from "@/assets/agent_vectors/sales.svg";
import bugIcon from "@/assets/agent_vectors/bug.svg";
import internetIcon from "@/assets/agent_vectors/internet.svg";

export const agents: Agent[] = [
  { id: "form-filling", iconSrc: formIcon },
  { id: "report-writing", iconSrc: textCursorIcon },
  { id: "fraud-flagging", iconSrc: warningIcon },
  { id: "contract-analyst", iconSrc: documentIcon },
  { id: "inventory-forecast", iconSrc: crateIcon },
  { id: "sales-outbound", iconSrc: salesIcon },
  { id: "anomaly-detection", iconSrc: bugIcon },
  { id: "internet-scraper", iconSrc: internetIcon },
];


import sapIcon from "@/assets/integrations/sap.svg";
import awsIcon from "@/assets/integrations/aws.svg";
import microsoftDynamicsIcon from "@/assets/integrations/microsoft-dynamics.svg";
import netsuiteIcon from "@/assets/integrations/netsuite.svg";
import oracleIcon from "@/assets/integrations/oracle.svg";

export interface Integration {
  id: string;
  iconSrc: ImageMetadata;
}

export const integrations: Integration[] = [
  { id: "SAP", iconSrc: sapIcon },
  { id: "AWS", iconSrc: awsIcon },
  { id: "Microsoft Dynamics", iconSrc: microsoftDynamicsIcon },
  { id: "NetSuite", iconSrc: netsuiteIcon },
  { id: "Oracle", iconSrc: oracleIcon },
];


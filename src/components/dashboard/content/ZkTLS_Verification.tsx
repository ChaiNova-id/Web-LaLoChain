import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ZkTLS_Verification = () => {
  return (
    <Card className="w-[72.99vw]">
      <CardHeader>
        <CardTitle className="text-[1vw]">zkTLS Verification</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-items-center gap-[1vw]">
        <Progress value={75} className="h-[0.813vw] rounded-full" />
        <span className="self-end text-[1vw]">75%</span>
      </CardContent>
    </Card>
  );
};

export default ZkTLS_Verification;

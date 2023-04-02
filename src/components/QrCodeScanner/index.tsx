import { QrReader } from "react-qr-reader";
import ReactLoading from "react-loading";

import { useQrCode } from "@hooks";

export const QrCodeScanner = () => {
  const { createAttendance, isLoading } = useQrCode();
  type OnError = Parameters<typeof createAttendance>[2];

  const onSuccess = () => {
    alert("Chamada realizada com sucesso!");
    location.reload();
  };
  const onError: OnError = (response) => {
    alert(response.message);
    location.reload();
  };

  if (isLoading)
    return (
      <ReactLoading
        className='mx-auto my-20'
        type={"spin"}
        color={"000000"}
        height={70}
        width={70}
      />
    );

  return (
    <QrReader
      constraints={{
        width: 320,
        height: 320,
        facingMode: "environment",
      }}
      onResult={(result) => {
        if (!!result) {
          createAttendance(result.getText(), onSuccess, onError);
        }
      }}
      scanDelay={1000}
    />
  );
};


export async function statusChanger(
  setLoading,
  setType,
  setErrorMessage,
  setItems,
  setShowError,
  setShowState,
  contractId,
  func,
  status
) {
    if(status.length <= 0){
        return

    }
  setLoading(() => true);
  const result = await func(contractId, status);
  setLoading(() => false);

  if (result.status == 200) {
    setType(() => "success");
    setErrorMessage(() => result?.data?.message ?? "Successfull");

    setItems((prevData) =>
      prevData?.map((item) => {
        if (item._id == contractId) {
          return {
            ...item,
            status,
          };
        }
        return item;
      })
    );
  } else {
    setType(() => "danger");
    setErrorMessage(() => result?.message ?? "Error");
  }

  setShowError(() => true);

  setShowState(() => false);
}

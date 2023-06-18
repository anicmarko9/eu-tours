const VignetteScreen = (): JSX.Element => {
  return (
    <>
      <div className="h-full w-full bg-gradient-to-tl from-black/50 via-transparent to-transparent absolute top-0 left-0"></div>
      <div className="h-full w-full bg-gradient-to-tr from-black/50 via-transparent to-transparent absolute top-0 right-0"></div>
      <div className="h-full w-full bg-gradient-to-br from-black/50 via-transparent to-transparent absolute bottom-0 right-0"></div>
      <div className="h-full w-full bg-gradient-to-bl from-black/50 via-transparent to-transparent absolute bottom-0 left-0"></div>
    </>
  );
};

export default VignetteScreen;

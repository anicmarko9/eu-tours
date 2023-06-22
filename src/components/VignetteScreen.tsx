const VignetteScreen = (): JSX.Element => {
  return (
    <>
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-tl from-black/50 via-transparent to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-tr from-black/50 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 h-full w-full bg-gradient-to-br from-black/50 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-bl from-black/50 via-transparent to-transparent"></div>
    </>
  );
};

export default VignetteScreen;

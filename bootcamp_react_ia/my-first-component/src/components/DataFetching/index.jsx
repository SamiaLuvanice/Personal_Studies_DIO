const withDataFetching = (WrapperComponent, endpoint) => {
  return () => {
    return <WrapperComponent />;
  };
};

export default withDataFetching;

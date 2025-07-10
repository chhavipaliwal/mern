import icon from '@iconify/react';

const LogoSearch = () => {
  return (
    <div className="logoSearch">
      <img src="/twitter.png" alt="Logo" />
      <input type="text" placeholder="Search..." />
      <Icon icon="material-symbols:search-rounded" width="24" height="24" />
    </div>
  );
};
export default LogoSearch;
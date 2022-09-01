const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
  marginBottom: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: '100%',
  height: '100%',
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  width: '100%',
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
};

module.exports = {
  thumbsContainer, thumb, thumbInner, img,
};

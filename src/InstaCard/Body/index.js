import React from 'react';
import PropTypes from 'prop-types';
import BodyMain from './Main';
import MainImg from '../../images/image-one.jpg';

const Body = ({ theme, data, chosenId }) => {
  console.log(chosenId);
  const { imageUrl } = data;
  return (
    <section className="card-body">
      <div className="card-image">
        <img alt="メイン画像" src={imageUrl} />
      </div>
      <BodyMain theme={theme} data={data} chosenId={chosenId} />
    </section>
  );
};

Comment.propTypes = {
  theme: PropTypes.string.isRequired,
  data: PropTypes.object,
}

Comment.defaultProps = {
  theme: "light",
  data: {
    imageUrl: MainImg
  }
}

export default Body;
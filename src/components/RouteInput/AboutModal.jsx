import React, { Component } from 'react';
import Modal from 'react-modal';
import MdClose from 'react-icons/lib/md/close';

Modal.setAppElement('#app');

class AboutModal extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div style={{ display: 'inline-block' }}>
        <button className="about-btn" onClick={this.handleOpenModal}>
          About
        </button>
        <Modal
          style={{
            content: {
              backgroundColor: '#222',
              color: '#eee',
              left: 350,
              right: 80,
              border: '1px solid #444',
              paddingTop: 0
            },
            overlay: { zIndex: 99, backgroundColor: 'rgba(0, 0, 0, 0.75)' }
          }}
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
        >
          <h2>About</h2>
          <button
            onClick={this.handleCloseModal}
            style={{ marginTop: 0, top: 0 }}
            className="delete-button"
          >
            <MdClose />
          </button>
          <p>
            Great Circle Map is a tool that provides a visualization of routes between airports and
            calculates the distance. A great circle path (also known as a geodesic path) is the
            shortest possible route between two points on the surface of earth or any other sphere.
            The map uses the Mercator projection by default. On this type of map, great circle paths
            tend to look curved even though they are in fact straight. As an alternative, there is
            also a 3D globe visualization which doesn’t have that problem.
            <br />
            <br />
            Projecting a 3-dimensional sphere onto a 2-dimensional screen always creates
            distortions. Most world maps use the Mercator projection or something similar. These
            projections tend to have large distortions around the polar regions. For example,
            distances look much bigger than they actually are near the poles, while they look
            relatively small around the equator. People tend to be particularly confused by how the
            shortest route between two cities like Dubai and Los Angeles goes via the north pole,
            despite the fact that both of these cities are situated pretty far south. It makes a lot
            more sense when you look at an orthographic projection.
            <br />
            <br />
            <img
              src="/lax-to-dxb-gm.png"
              alt="Google maps projection of route from Los Angeles to Dubai"
            />
            <img
              src="/lax-to-dxb-globe.png"
              alt="Globe view of the route from Los Angeles to Dubai"
            />
            <br />
            The distances calculated are the shortest possible distances (while not going through
            the earth itself). However, airlines often don’t follow the shortest route exactly
            because of a variety of reasons. Airspace reserved for military purposes and areas of
            conflict for example. The earth is not a perfect sphere, which is taken into account in
            the distance calculations. It is best approximated by an ellipsoid which is widest
            around the equator.
            <br />
            <br />
            If you found a bug or issue, please contact me at markus.s.englund@gmail.com or file an
            issue on <a href="https://github.com/yogaboll/great-circle-map">github</a>. The Github
            repository also contains the complete source code for this website.
            <br />
            This app was made by me, Markus Englund. I’m a Swedish web developer and aviation
            enthusiast.
          </p>
        </Modal>
      </div>
    );
  }
}

export default AboutModal;

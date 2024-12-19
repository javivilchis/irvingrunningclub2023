import React from 'react'

const Marketing = () => {

  const goTo = (url) =>{
    window.location.href = url;
  }

  return (<div class="row my-5">
      <div class="col-lg-4">
        
        <img className="bd-placeholder-img rounded-circle  mb-4 border border-dark shadow" src="/images/running-selfie.jpeg" width="240" height="240" alt="selfie" preserveAspectRatio="xMidYMid slice" focusable="false" />
        <h2 class="fw-normal"><strong>Tuesday</strong> Runs</h2>
        <p>We have scheduled runs on Tuesday evenings, we meet at Sam Houston park at the first bench. Different paces and distances are available.
        </p>
        <p><a onPress={() => goTo(`https://www.facebook.com/groups/irvingrunningclub`)}
          className="btn btn-secondary"
          href={'https://www.facebook.com/groups/irvingrunningclub'}
          target="_blank"
          rel="noopener noreferrer"
        >View details &raquo;</a></p>
      </div>
      <div class="col-lg-4">
        <img className="bd-placeholder-img rounded-circle mb-4 border border-dark shadow" src="/images/all-together.jpeg" width="240" height="240" alt="selfie" preserveAspectRatio="xMidYMid slice" focusable="false" />
        <h2 class="fw-normal"><strong>Thursday</strong> Runs</h2>
        <p>Come on out on Thursday to run easy, fast or walk along the beautiful Campion trail. We meet in the evening every Thursday.</p>
        <p><a
          className="btn btn-secondary"
          href="https://www.facebook.com/groups/irvingrunningclub"
          target="_blank"
          rel="noopener noreferrer"
        >View details &raquo;</a></p>
      </div>
      <div class="col-lg-4">
        <img className="bd-placeholder-img rounded-circle  mb-4 border border-dark shadow" src="/images/saturday-runs.jpeg" width="240" height="240" alt="selfie" preserveAspectRatio="xMidYMid slice" focusable="false" />
        <h2 class="fw-normal"><strong>Saturday</strong> Runs</h2>
        <p>We usually plan our long runs on Saturday mornings starting from Valley Ranch Library parking lot, please visit our facebook page for times.
        </p>
        <p><a
          className="btn btn-secondary"
          href="https://www.facebook.com/groups/irvingrunningclub"
          target="_blank"
          rel="noopener noreferrer"
        >View details &raquo;</a></p>
      </div>
    </div>)
}
export default Marketing;
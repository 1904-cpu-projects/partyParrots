import React from 'react';

const Google = ({ size, destination }) => (
  <form
    method="GET"
    action={`/auth/google${destination ? `/${destination}` : ''}`}
  >
    <div className="field is-centered">
      <p className="control has-text-centered">
        <button
          type="submit"
          className={`button is-success ${size ? '' : 'is-small'}`}
        >
          Log in with Google
        </button>
      </p>
    </div>
  </form>
);

export default Google;

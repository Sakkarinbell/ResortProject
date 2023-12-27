import Navbar from "../Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
function Account() {
  return (
    <>
      <Navbar />
      <body>
        <div className="container light-style flex-grow-1 container-p-y">
          <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
          <div className="card overflow-hidden">
            <div className="row no-gutters row-bordered row-border-light">
              <div className="col-md-3 pt-0">
                <div className="list-group list-group-flush account-settings-links">
                  <a
                    className="list-group-item list-group-item-action active"
                    data-toggle="list"
                    href="#account-general"
                  >
                    General
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#account-change-password"
                  >
                    Change password
                  </a>
                  <a
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#account-history"
                  >
                    History
                  </a>
                </div>
              </div>
              <div className="col-md-9">
                <div className="tab-content">
                  <div
                    className="tab-pane fade active show"
                    id="account-general"
                  >
                    <div className="card-body media align-items-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt
                        className="d-block ui-w-80"
                      />
                      <div className="media-body ml-4">
                        <label className="btn btn-outline-primary">
                          Upload new photo
                          <input
                            type="file"
                            className="account-settings-fileinput"
                          />
                        </label>{" "}
                        &nbsp;
                        <button
                          type="button"
                          className="btn btn-default md-btn-flat"
                        >
                          Reset
                        </button>
                        <div className="text-light small mt-1">
                          Allowed JPG, GIF or PNG. Max size of 800K
                        </div>
                      </div>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body">
                      <div className="form-group">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control mb-1" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">E-mail</label>
                        <input type="text" className="form-control mb-1" />
                        <div className="alert alert-warning mt-3">
                          Your email is not confirmed. Please check your inbox.
                          <a href="javascript:void(0)">Resend confirmation</a>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone number</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Date of birth</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="account-change-password">
                    <div className="card-body pb-2">
                      <div className="form-group">
                        <label className="form-label">Current password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">New password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">
                          Confirm new password
                        </label>
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="account-history">
                    <div className="card-body pb-2">
                      <div className="form-group">
                        <h1>History</h1>
                        <div className="History">
                          <h4>Success</h4>
                          <h4>Detailll.....</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right mt-3">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              &nbsp;
              <button type="button" className="btn btn-default">
                Cancel
              </button>
            </div>
          </div>
          <script
            data-cfasync="false"
            src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
          ></script>
          <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js"></script>
          <script type="text/javascript"></script>
        </div>
      </body>
    </>
  );
}

export default Account;

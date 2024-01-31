const ImgUpload = ({
    onChange,
    src
  }) => (
    <label htmlFor="photo-upload" className="custom-file-upload fas">
      <div className="img-wrap img-upload">
        <img htmlFor="photo-upload" src={src} alt="Profile" />
      </div>
      <input id="photo-upload" type="file" onChange={onChange} />
    </label>
  );
  
  const Name = ({ onChange, value }) => (
    <div className="field">
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        onChange={onChange}
        maxLength="25"
        value={value}
        placeholder="Alexa"
        required
      />
    </div>
  );
  
  const UserID = ({ onChange, value }) => (
    <div className="field">
      <label htmlFor="user-id">User ID:</label>
      <input
        id="user-id"
        type="text"
        onChange={onChange}
        maxLength="15"
        value={value}
        placeholder="YourUserID"
        required
      />
    </div>
  );
  
  const Email = ({ onChange, value }) => (
    <div className="field">
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        onChange={onChange}
        value={value}
        placeholder="you@example.com"
        required
      />
    </div>
  );
  
  const Password = ({ onChange, value }) => (
    <div className="field">
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        onChange={onChange}
        value={value}
        placeholder="********"
        required
      />
    </div>
  );
  
  const Status = ({ onChange, value }) => (
    <div className="field">
      <label htmlFor="status">Status:</label>
      <input
        id="status"
        type="text"
        onChange={onChange}
        maxLength="35"
        value={value}
        placeholder="It's a nice day!"
        required
      />
    </div>
  );
  
  const Profile = ({ onSubmit, src, name, userId, email, status }) => (
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>Profile Card</h1>
        <ImgUpload onChange={() => {}} src={src} />
        <Name onChange={() => {}} value={name} />
        <UserID onChange={() => {}} value={userId} />
        <Email onChange={() => {}} value={email} />
        <Status onChange={() => {}} value={status} />
        <button type="submit" className="edit">
          Edit Profile
        </button>
      </form>
    </div>
  );
  
  const Edit = ({ onSubmit, children }) => (
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>Profile Card</h1>
        {children}
        <button type="submit" className="save">
          Save
        </button>
      </form>
    </div>
  );
  
  class CardProfile extends React.Component {
    state = {
      file: '',
      imagePreviewUrl:
        'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
      name: '',
      userId: '',
      email: '',
      password: '',
      status: '',
      active: 'edit',
    };
  
    photoUpload = (e) => {
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result,
        });
      };
      reader.readAsDataURL(file);
    };
  
    editName = (e) => {
      const name = e.target.value;
      this.setState({
        name,
      });
    };
  
    editUserID = (e) => {
      const userId = e.target.value;
      this.setState({
        userId,
      });
    };
  
    editEmail = (e) => {
      const email = e.target.value;
      this.setState({
        email,
      });
    };
  
    editPassword = (e) => {
      const password = e.target.value;
      this.setState({
        password,
      });
    };
  
    editStatus = (e) => {
      const status = e.target.value;
      this.setState({
        status,
      });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
      this.setState({
        active: activeP,
      });
    };
  
    render() {
      const {
        imagePreviewUrl,
        name,
        userId,
        email,
        password,
        status,
        active,
      } = this.state;
  
      return (
        <div>
          {active === 'edit' ? (
            <Edit onSubmit={this.handleSubmit}>
              <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
              <Name onChange={this.editName} value={name} />
              <UserID onChange={this.editUserID} value={userId} />
              <Email onChange={this.editEmail} value={email} />
              <Password onChange={this.editPassword} value={password} />
              <Status onChange={this.editStatus} value={status} />
            </Edit>
          ) : (
            <Profile
              onSubmit={this.handleSubmit}
              src={imagePreviewUrl}
              name={name}
              userId={userId}
              email={email}
              status={status}
            />
          )}
        </div>
      );
    }
  }
  
  ReactDOM.render(<CardProfile />, document.getElementById('root'));
  
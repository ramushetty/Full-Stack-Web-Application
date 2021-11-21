from flask_restx import fields,Resource,Namespace
from flask import request,jsonify,make_response
from models import User
from flask_jwt_extended import create_access_token,create_refresh_token
from werkzeug.security import generate_password_hash,check_password_hash


auth_ns = Namespace('auth',description='A namespace for authentication')



signup_model = auth_ns.model("SignUp",{
    "username": fields.String(),
    "email": fields.String(),
    "password": fields.String()
})
login_model = auth_ns.model("Login",{
    "username": fields.String(),
    "password": fields.String()
})

@auth_ns.route('/signup')
class Signup(Resource):
    @auth_ns.expect(signup_model)
    def post(self):
        data = request.get_json()
        username = data.get('username')
        user_db = User.query.filter_by(username=username).first()

        if user_db is not None:
            return jsonify({"message": f"username {username} already exists"})

        user_obj = User(
            username=data.get('username'),
            email=data.get('email'),
            password=generate_password_hash(data.get('password')))
        user_obj.save()

        return make_response(jsonify({"message": f"username {username} successfully created!"}),201)


@auth_ns.route('/login')
class Login(Resource):
    @auth_ns.expect(login_model)
    def post(self):
        data = request.get_json()

        db_user = User.query.filter_by(username=data.get('username')).first()

        if db_user and check_password_hash(db_user.password,data.get('password')):
            acccess_token = create_access_token(identity=db_user.username)
            refresh_token = create_refresh_token(identity=db_user.username)
            return jsonify({"access_token": acccess_token,"refresh_token": refresh_token})
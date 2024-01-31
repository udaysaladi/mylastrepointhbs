package com.fable.weatherall.Services;

import java.util.List;

import com.fable.weatherall.Admin_User_Entities.User;
import com.fable.weatherall.DTOs.LoginDTO;
import com.fable.weatherall.DTOs.UserDTO;
import com.fable.weatherall.Responses.LoginResponse;


public interface UserService {

	String addUser(UserDTO userDTO);
	LoginResponse loginUser(LoginDTO loginDTO);
	 List<User> findAllUsers(); 
	 List<String> addMultipleUsers(List<UserDTO> userDTOList);
	 
	 String updateUser(int userId, UserDTO userDTO);

}

import 'package:flutter/material.dart';
import 'package:reddit_fox/Pages/home/HomePage.dart';
import 'package:reddit_fox/core/common/sign_in_with_google_button.dart';
import 'package:reddit_fox/core/constants/constants.dart';

/// A StatelessWidget for the login screen.
class LoginScreen extends StatelessWidget {
  /// Constructor for the LoginScreen widget.
  const LoginScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Image.asset(
          Constants.logoPath,
          height: 40,
        ),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const HomePage()),
              );
            },
            child: const Text(
              'Skip',
              style: TextStyle(
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ],
      ),
      body: Column(
        children: [
          const SizedBox(height: 30),
          const Text(
            'dive into anything',
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.bold,
              letterSpacing: 0.5,
            ),
          ),
          const SizedBox(height: 30),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Image.asset(
              Constants.loginPath,
              height: 400,
            ),
          ),
          const SizedBox(height: 20),
          const SignInWithGoogleButton(),
        ],
      ),
    );
  }
}

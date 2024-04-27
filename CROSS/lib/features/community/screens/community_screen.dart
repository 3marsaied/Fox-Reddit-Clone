import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:reddit_fox/core/common/error_text.dart';
import 'package:reddit_fox/core/common/loader.dart';
import 'package:reddit_fox/features/auth/controller/auth_controller.dart';
import 'package:reddit_fox/features/community/controller/community_controller.dart';


class CommunityScreen extends ConsumerWidget {
  final String name;
  const CommunityScreen({super.key, required this.name});

  // http://localhost:4000/r/flutter
  void navigateToModTools(BuildContext context){
    Navigator.pushNamed(context, '/mod-tools/$name');
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final user = ref.watch(userProvider)!;
    return Scaffold(
      body: ref.watch(getCommunityByNameProvider(name)).when(
        data: (community) => NestedScrollView(headerSliverBuilder: (context, innnerBoxIsScrolled) {
          return [
            SliverAppBar(
                expandedHeight: 150, 
                floating: true,
                snap: true,
                flexibleSpace: Stack(
                  children: [
                    Positioned.fill(
                      child: Image.network(
                      community.banner, 
                    fit: BoxFit.cover,
                    ),
                  ),
                ],
              ),
            ),
            SliverPadding(padding: const EdgeInsets.all(16),
            sliver: SliverList(delegate: SliverChildListDelegate(
              [
                Align(
                  alignment: Alignment.topLeft,
                  child: CircleAvatar(
                    backgroundImage: NetworkImage(community.avatar),
                    radius: 36,
                  ),
                ),
                const SizedBox(height: 5),
                Row(
                   mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                'r/${community.name}',
                                style: const TextStyle(
                                  fontSize: 19,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                                community.mods.contains(user.uid)
                                    ? OutlinedButton(
                                        onPressed: () {navigateToModTools(context);
                                        },
                                        style: ElevatedButton.styleFrom(
                                          shape: RoundedRectangleBorder(
                                            borderRadius: BorderRadius.circular(20),
                                          ),
                                          padding: const EdgeInsets.symmetric(horizontal: 25),
                                        ),
                                        child: const Text('Mod Tools'),
                                      )
                                    : OutlinedButton(
                                        onPressed: () {},
                                        style: ElevatedButton.styleFrom(
                                          shape: RoundedRectangleBorder(
                                            borderRadius: BorderRadius.circular(20),
                                          ),
                                          padding: const EdgeInsets.symmetric(horizontal: 25),
                                        ),
                                        child: Text(community.members.contains(user.uid) ? 'Joined' : 'Join'),
                                      ),
                            ],
                          ),
                          Padding(
                  padding: const EdgeInsets.only(top: 10),
                  child: Text('${community.members.length} members',),
                ),
              ],
            ),
          ),
        )
      ];
     },
        body: const Text('Displaying posts!')
        ), 
        error: (error, stackTrace) => ErrorText(error: error.toString()), 
        loading: () => const Loader(), // Enclose the named parameter loading in curly braces
      ),
    );
  }
  }


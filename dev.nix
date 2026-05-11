{ pkgs, ... }:

{
  packages = [
    pkgs.git
    pkgs.openssh
    pkgs.nodejs
  ];
}
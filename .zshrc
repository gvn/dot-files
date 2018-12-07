# Path to your oh-my-zsh installation.
export ZSH=/Users/gvn/dotfiles/.oh-my-zsh

ZSH_CUSTOM=/Users/gvn/dotfiles/zsh.custom
ZSH_THEME="gvn"

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

plugins=(
  git
  brew
  npm
  autojump
  extract
  colored-man-pages
  colorize
)

# User configuration

export PATH="/usr/local/php5/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/gvn/bin:/usr/local/sbin:/Users/gvn/MozCode/git-cinnabar:/Users/gvn/MozCode/arcanist/bin:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
export EDITOR=vim

# export MANPATH="/usr/local/man:$MANPATH"

source $ZSH/oh-my-zsh.sh

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/dsa_id"

# Switch to Vim mode for prompt
set -o vi

# Docker stuff
alias dockup="bash --login '/Applications/Docker/Docker Quickstart Terminal.app/Contents/Resources/Scripts/start.sh'"
# eval "$(docker-machine env default)" # ?

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

# ------------------------------------
# General
# ------------------------------------

alias plex-admin='open http://sulaco.local:32400/web/index.html'
alias tweakzshrc='vim /Users/gvn/dotfiles/.zshrc'
alias ..='cd ..'
alias l='ls -Alhp'
alias reload='source ~/.zshrc && clear'
alias of='open .'
alias top='top -o cpu'
alias disks='diskutil list'
alias ejectcd='diskutil eject /dev/disk3'
alias rip='abcde'
alias mou='open -a Mou'
alias weather='ansiweather -l seattle -u imperial'
alias vtop='vtop --theme monokai'
alias duf='du -h -d 0'
alias stripcovers='id3v2 -r "APIC" *.mp3'

function timer {
  local delay=$(($1 * 60))
  echo "Set timer for $1 minutes."
  (sleep $delay && noti -t "timer") &
}

function take {
  mkdir -p $1 && cd $1
}

function swatch {
  watch --no-title --interval 1 --color $1
}

alias h='history'
alias hsi='hs -i'

# Homebrew
alias brews='brew list -1 | more'
alias bubo='brew update && brew outdated'
alias bubc='brew upgrade && brew cleanup'
alias bubu='bubo && bubc'

# ------------------------------------
# Android
# ------------------------------------

alias devices='adb devices'
alias logcat='adb logcat CordovaLog:D *:S'
alias forward='adb forward tcp:6000 localfilesystem:/data/local/debugger-socket'

# ------------------------------------
# Firefox
# ------------------------------------

# Run Firefox with profile selector
alias ff='/Applications/Firefox.app/Contents/MacOS/firefox-bin -P'

# mach
alias mb='./mach build'
alias mr='./mach run'
alias mbfr='./mach build faster && ./mach run'
alias mcbr='./mach clobber && ./mach build && ./mach run'

# Clean out AS code injected into FF repo
alias mcgtfo='git reset --hard && git clean -d -f && git clean -d -f'

# ------------------------------------
# Git
# ------------------------------------

alias git='hub' # For `hub` – https://github.com/github/hub
alias g='git status'
alias ga='git add'
alias gcamend='git commit --amend'
alias gc='git commit'
alias gd='clear; git diff --color | diff-so-fancy | less'
alias gb='git branch -v'
alias guncommit='git reset --soft HEAD~1'
alias gr='git remote -v'
alias gitzilla='git pull mozilla develop'
alias gpom='git checkout master && git pull origin master'
alias ghp-fresh='git checkout --orphan gh-pages'
alias gcb='git checkout -b'
alias gco='git checkout'
alias gcm='git checkout master'
alias gpr='git pull-request'

function gsquash () {
  git rebase -i "HEAD~$1"
}

alias gig='git update-index --assume-unchanged'
alias gunig='git update-index --no-assume-unchanged'

alias gbro='git browse'

function gint {
  git init
  echo '.DS_Store' > .gitignore
}

# ------------------------------------
# npm & node
# ------------------------------------

alias npmglobal='npm list -g --depth=0'
alias run='npm run'
alias npmi='npm i && noti -t "npm install finished"'
alias nodei='node --inspect-brk'

# ------------------------------------
# Web
# ------------------------------------

# npm install -g node-static
alias server='static'

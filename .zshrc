# Path to your oh-my-zsh installation.
export ZSH=/Users/gvn/Dropbox/dotfiles/.oh-my-zsh

ZSH_CUSTOM=/Users/gvn/Dropbox/dotfiles/zsh.custom

# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/
# Optionally, if you set this to "random", it'll load a random theme each
# time that oh-my-zsh is loaded.
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

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(
  git
  brew
  npm
  autojump
)

# User configuration

export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
# export MANPATH="/usr/local/man:$MANPATH"

source $ZSH/oh-my-zsh.sh

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/dsa_id"

# Switch to Vim mode for prompt
set -o vi

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

# ------------------------------------
# Directory Bookmarks
# ------------------------------------

alias gocode='cd ~/Dropbox/Code/'
alias godots='cd ~/Dropbox/dotfiles/'
alias gozilla='cd ~/Documents/mozilla-code/'

# ------------------------------------
# General
# ------------------------------------

alias ..='cd ..'
alias l='ls -Alhp'
alias reload='source ~/.zshrc'
alias of='open .'

function take {
  mkdir -p $1
  cd $1
}

# ------------------------------------
# Android
# ------------------------------------

alias devices='adb devices'
alias logcat='adb logcat CordovaLog:D *:S'
alias forward='adb forward tcp:6000 localfilesystem:/data/local/debugger-socket'

# ------------------------------------
# Git
# ------------------------------------

alias g='git status'
alias ga='git add'
alias gcamend='git commit --amend'
alias gc='git commit'
alias gd='clear; git diff --unified=5'
alias gb='git branch -v'
alias guncommit='git reset --soft HEAD~1'
alias gr='git remote -v'
alias gitzilla='git pull mozilla develop'

alias gcb='git checkout -b'
alias gco='git checkout'
alias gcm='git checkout master'

alias gig='git update-index --assume-unchanged'
alias gunig='git update-index --no-assume-unchanged'

function gint {
  git init
  echo '.DS_Store' > .gitignore
}

# ------------------------------------
# npm
# ------------------------------------

alias npmglobal='npm list -g --depth=0'
alias run='npm run'

# ------------------------------------
# Web
# ------------------------------------

# npm install -g node-static
alias server='static'

[[ $- != *i* ]] && return

# Function to get git status
parse_git_branch() {
  git rev-parse --is-inside-work-tree &>/dev/null || return

  local branch
  branch=$(git symbolic-ref --short HEAD 2>/dev/null || git describe --tags --exact-match 2>/dev/null || echo "DETACHED")

  local dirty=""
  local staged=""
  local untracked=""
  local ahead_behind=""

  ! git diff --quiet && dirty="*"
  ! git diff --cached --quiet && staged="+"
  [ -n "$(git ls-files --others --exclude-standard)" ] && untracked="?"

  if git rev-parse --abbrev-ref --symbolic-full-name @{u} &>/dev/null; then
    local upstream=$(git rev-parse --abbrev-ref @{u} 2>/dev/null)
    local counts
    counts=$(git rev-list --left-right --count HEAD...@{u} 2>/dev/null)
    local ahead=$(echo "$counts" | awk '{print $1}')
    local behind=$(echo "$counts" | awk '{print $2}')

    [[ $ahead -gt 0 ]] && ahead_behind+="↑ $ahead "
    [[ $behind -gt 0 ]] && ahead_behind+="↓ $behind"
    ahead_behind="${ahead_behind%" "}"
  fi

  status="${ahead_behind:+$ahead_behind }$branch$staged$dirty$untracked"
  echo -e " \033[1;33m(${status})\033[0m"
}

PS1='\n\[\033[1;36m\][ \u@\h | \[\033[1;32m\]\w \[\033[1;36m\]]$(parse_git_branch)\[\033[0m\]\n\[\e[38;5;51m\]>\[\e[0m\] '
# [[ $PS1 && -f /usr/share/bash-completion/bash_completion ]] && . /usr/share/bash-completion/bash_completion

# set -o vi

# Prevent file overwrite on stdout redirection, Use `>|` to force redirection to an existing file
set -o noclobber
shopt -s checkwinsize

# Enable history expansion with space, typing !!<space> will replace the !! with your last command
bind Space:magic-space

# Turn on recursive globbing (enables ** to recurse all directories)
shopt -s globstar 2>/dev/null

# Perform file completion in a case insensitive fashion
bind "set completion-ignore-case on"

# Treat hyphens and underscores as equivalent
bind "set completion-map-case on"

#This turns off the use of the internal pager when returning long completion lists.
bind "set page-completions off"

# Immediately add a trailing slash when autocompleting symlinks to directories
bind "set mark-symlinked-directories on"

# expands the command, but places it in the prompt for confirmation
shopt -s histverify
# Append to the history file, don't overwrite it
shopt -s histappend
# Save multi-line commands as one command
shopt -s cmdhist
# Record each line as it gets issued
PROMPT_COMMAND='history -a'
HISTSIZE=500000
HISTFILESIZE=100000
# Avoid duplicate entries
HISTCONTROL="erasedups:ignoreboth"
export HISTIGNORE="&:[ ]*:exit:ls:bg:fg:history:clear"
HISTTIMEFORMAT='%F %T '

# Enable incremental history search with up/down arrows (also Readline goodness)
# Learn more about this here: http://codeinthehole.com/writing/the-most-important-command-line-tip-incremental-history-searching-with-inputrc/
bind '"\e[A": history-search-backward'
bind '"\e[B": history-search-forward'
bind '"\e[C": forward-char'
bind '"\e[D": backward-char'

# Prepend cd to directory names automatically
shopt -s autocd 2>/dev/null
# Correct spelling errors during tab-completion
shopt -s dirspell 2>/dev/null
# Correct spelling errors in arguments supplied to cd
shopt -s cdspell 2>/dev/null

export XDG_CONFIG_HOME="$HOME/.config"
export XDG_DATA_HOME="$HOME/.local/share"
export XDG_CACHE_HOME="$HOME/.cache"
export XDG_STATE_HOME="$HOME/.local/state"

export HISTFILE="$XDG_STATE_HOME"/bash/history
export BASH_COMPLETION_USER_FILE="$XDG_CONFIG_HOME"/bash-completion/bash_completion

export PATH="$PATH:$HOME/.local/bin:$HOME/Documents/scripts/bin"

export CARGO_HOME="$XDG_DATA_HOME"/cargo
export GOPATH="$XDG_DATA_HOME"/go

prefix=${XDG_DATA_HOME}/npm
cache=${XDG_CACHE_HOME}/npm
init_module="${XDG_CONFIG_HOME}/npm/config/npm-init.js"
logs_dir="${XDG_STATE_HOME}/npm/logs"
export init_module
export logs_dir
export prefix
export cache

export COLORTERM=truecolor
# export TERM=screen-256color
export EDITOR=nvim
export VISUAL=nvim
export SYSTEMD_EDITOR=nvim
export MANPAGER="nvim +Man!"
# export PAGER="nvim -R"

# alias l="eza -l -o --no-permissions --icons=always --group-directories-first"
# alias ll="eza -la -o --no-permissions --icons=always --group-directories-first"
alias l="eza -l -o --no-permissions --group-directories-first"
alias ll="eza -la -o --no-permissions --group-directories-first"

alias ls='ls --color=auto'
alias ip='ip -color=auto'
alias grep='grep --color=auto'
alias df="df -h"

alias c="clear"
alias cp='cp -iv'
alias mv='mv -iv'
alias trash="trash -v"
alias cd="z"

alias vim="nvim"
alias vi="nvim"
alias v="nvim +Ex"
alias vimdiff="nvim -d"
alias diffs='export DELTA_FEATURES=+side-by-side; git diff'
alias diffl='export DELTA_FEATURES=+; git diff'

# source /usr/share/wikiman/widgets/widget.bash
eval "$(zoxide init bash)"

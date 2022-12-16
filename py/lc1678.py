def interpret(command):
    st1 = command.replace('()', 'o')
    finalres = st1.replace('(al)', 'al')
    return finalres

command = "G()()()()(al)"
print(interpret(command))

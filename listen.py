import socket
import urllib2
#create an INET, STREAMing socket
serversocket = socket.socket(
    socket.AF_INET, socket.SOCK_STREAM)

#bind the socket to a public host,
# and a well-known port
serversocket.bind(('', 1234))
#become a server socket
serversocket.listen(5)

while 1:
    serversocket.accept()
    print "hi"
    try:
        urllib2.urlopen("http://172.31.34.67:1234")
    except:
	pass

serversocket.close()

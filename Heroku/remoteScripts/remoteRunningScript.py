import paramiko
import os

cis_linux = paramiko.SSHClient()
cis_linux.set_missing_host_key_policy(paramiko.AutoAddPolicy())
cis_linux.connect(os.environ['CIS_LINUX'], username=os.environ['TEMPLE_USERNAME'],
                  password=os.environ['TEMPLE_PASSWORD'])

linux_transport = cis_linux.get_transport()
gpu_address = (os.environ['GPU_SERVER'], 22)
local_addr = (os.environ['CIS_LINUX'], 22)
channel = linux_transport.open_channel("direct-tcpip", gpu_address, local_addr)

gpu_host = paramiko.SSHClient()
gpu_host.set_missing_host_key_policy(paramiko.AutoAddPolicy())
gpu_host.connect(os.environ['GPU_SERVER'], username=os.environ['TEMPLE_USERNAME'],
                 password=os.environ['TEMPLE_PASSWORD'], sock=channel)

stdin, stdout, stderr = gpu_host.exec_command("ls project-algorithmic-trading/trading_algos")

print(stdout.read())

gpu_host.close()
cis_linux.close()

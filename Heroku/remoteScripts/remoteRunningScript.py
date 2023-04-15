import paramiko
import os

cis_linux = paramiko.SSHClient()
cis_linux.set_missing_host_key_policy(paramiko.AutoAddPolicy())
cis_linux.connect(os.environ['CIS_LINUX'], username=os.environ['TEMPLE_USERNAME'],
                  password=os.environ['TEMPLE_PASSWORD'], banner_timeout=200, auth_timeout=60)

linux_transport = cis_linux.get_transport()
gpu_address = (os.environ['GPU_SERVER'], 22)
local_addr = (os.environ['CIS_LINUX'], 22)
channel = linux_transport.open_channel("direct-tcpip", gpu_address, local_addr)
print("Connected to CIS-linux server")

gpu_host = paramiko.SSHClient()
gpu_host.set_missing_host_key_policy(paramiko.AutoAddPolicy())
gpu_host.connect(os.environ['GPU_SERVER'], username=os.environ['TEMPLE_USERNAME'],
                 password=os.environ['TEMPLE_PASSWORD'], sock=channel, banner_timeout=200, auth_timeout=60)
print("Connected to GPU server")

gpu_transport = gpu_host.get_transport()
gpu_channel = gpu_transport.open_session()

gpu_channel.exec_command("/usr/bin/miniconda3/bin/python project-algorithmic-trading/Heroku/remoteScripts"
                         "/TimeSeriesStockPredictions.py > /dev/null 2>&1 &")
# redirection at end of script and change to executing on hos tto on channel is to allow process to run
# in the GPU server background, so heroku dyno doesn't have to just wait for execution and waste limited
# monthly hours

# stdin.close()
# print(stdout.read())
# print(stderr.read())
print("Started prediction app on GPU Server")
gpu_host.close()
cis_linux.close()

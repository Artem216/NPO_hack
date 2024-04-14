ARG PYTHON_VERSION=3.11.4
FROM python:${PYTHON_VERSION}-slim as base


# Select working directory
WORKDIR /code

# Copy requirements.txt to working directory
COPY requirements.txt requirements.txt


# Install dependencies
RUN pip install -r requirements.txt

# Copy source code to working directory
COPY . /code

# Create data directory
# RUN mkdir -p /data/logs

WORKDIR /code/src

# Run the application
# CMD ["uvicorn", "main:app", '--reload']
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]